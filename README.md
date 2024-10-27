
# Список задач

Небольшое React & Typescript приложение для управления списком задач (добавление, редактирование, удаление, фильтрация). 
Используется Local Storage для хранения данных.

## Деплой проекта

https://react-todo-test-chi.vercel.app/

## Фичи

- **Управление задачами**:
    - Логика управления состоянием вынесена в отдельный хук.
    - Пользователи могут добавлять задачу.
    - Отмечать ее как выполненную.
    - Легко редактировать.
    - Удалять.
    - Можно фильтровать задачи в зависимости от из статуса.

## Используемые технологии

- React
- TypeScript
- Module CSS

<img src="https://skillicons.dev/icons?i=react,ts,css" />

## Структура проекта

```
src/
├── components/
│   ├── Task/
│   │   ├── Task.tsx
│   │   └── Task.module.css
│   ├── TaskFilter/
│   │   ├── TaskFilter.tsx
│   │   └── TaskFilter.module.css
│   ├── TaskInput/
│   │   ├── TaskInput.test.tsx
│   │   └── TaskInput.module.css
│   ├── TaskList/
│   │   ├── TaskList.test.tsx
│   │   └── TaskList.module.css
├── hooks/
│   └── useTasks.ts
├── styles/
│   └── variables.css
├── types/
│   └── task.ts
├── App.tsx
├── App.module.css
├── index.css

```

