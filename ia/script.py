import json
import typing
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader, ServiceContext
from llama_index.llms.ollama import Ollama
from llama_index.core.storage.storage_context import StorageContext
from llama_index.vector_stores.qdrant import QdrantVectorStore
from llama_index.core import Settings
import qdrant_client

# Loading the documents from the disk
documents = SimpleDirectoryReader("./data").load_data()

# Initializing the vector store with Qdrant
client = qdrant_client.QdrantClient(path="./qdrant_data")
vector_store = QdrantVectorStore(client=client, collection_name="springboot")
storage_context = StorageContext.from_defaults(vector_store=vector_store)

# Initializing the Large Language Model (LLM) with Ollama
# The request_timeout may need to be adjusted depending on the system's performance capabilities
llm = Ollama(model="mistral", request_timeout=120.0)
Settings.llm = llm
Settings.embed_model = "local"

# Creating the index, which includes embedding the documents into the vector store
index = VectorStoreIndex.from_documents(documents, service_context=Settings, storage_context=storage_context)

# Querying the index with a specific question
query_engine = index.as_query_engine()
prompt = ("Vous êtes le maître de jeu d'un jeu de rôle. Générez-moi un scénario dans le monde de l'espionnage. Je veux "
          "le scénario au format JSON. Je veux un tableau, chaque élément représentant une scène. Une scène a les "
          "champs suivants : 'personnages', 'lieu', 'description' et 'nom'. Je veux uniquement une réponse au format "
          "JSON. Choisissez dans la liste suivante les personnages que vous souhaitez inclure dans le scénario : 1, "
          "2, 3, 4. Le texte suivant représente le contexte du scénario.")

response = query_engine.query(prompt)
json_obj = json.loads(response.response)
finalDescription = []

for obj in json_obj["scenes"]:
    promptDetail = ("La scène suivante est tiré d'un JDR sur le thème de l'espionnage, développes les possibilités "
                    "que les joueurs pourront avoir. Voici le text que tu dois enrichir" + obj["description"])
    response = query_engine.query(promptDetail)
    finalDescription.append(response.response)


print(finalDescription)
