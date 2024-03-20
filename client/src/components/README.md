# Components

This directory contains all the components used in the application. Each component is a separate file and is named according to the feature it is used in.

## Structure - Atomic Design

The components are organized using the atomic design methodology. This means that the components are organized into atoms, molecules, organisms, templates, and pages. This allows for a more organized and scalable codebase.

- **Atoms** are the smallest components, such as buttons, inputs, and labels.
- **Molecules** are made up of atoms and are used to create more complex components.
- **Organisms** are made up of molecules and are used to create even more complex components.
- **Templates** are made up of organisms and are used to create the layout of the page.

All components directories are organized in the following way:

```
ComponentName
    ├── componentName.interface.ts
    ├── componentName.module.(css|scss)
    ├── ComponentName.tsx
    └── index.ts
```

The index.ts file is used to export the component. This allows for cleaner imports in other files.
