import FormInput from "../../components/molecules/FormInput/FormInput.tsx"
import TextArea from "../../components/atoms/TextArea/TextArea.tsx"
import styles from './editCharacter.module.scss'

function EditCharacter() {
    return (
        <>
            <div className={styles.page}>
                <img src="https://via.placeholder.com/1200x700" alt="Map" className={styles.backgroundImage}></img>
                <div className={styles.modal}>
                    <div className={styles.container}>
                        <div className={styles.statsContainer}>
                            <FormInput label="Name"/>
                            <FormInput label="Profession"/>
                            <FormInput label="Clearance"/>
                            <TextArea label="Description"/>
                        </div>
                        <div>
                            <div className={styles.avatar}>
                                <img src="https://via.placeholder.com/300" alt="Avatar"/>
                            </div>
                        </div>
                        <div className={styles.statsContainer}>
                            <FormInput label="Physiscal"/>
                            <FormInput label="Social"/>
                            <FormInput label="Mental"/>
                            <FormInput label="Initiative"/>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <TextArea label="Inventory"/>
                    </div>
                    <div className={styles.skillContainer}>
                        <FormInput label="Skillset"/>
                        <FormInput label="Skill"/>
                        <FormInput label="Skill"/>
                        <FormInput label="Skill"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCharacter