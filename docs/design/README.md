# Проєктування бази даних

## Короткий зміст

## Модель бізнес-об'єктів

**[Модель бізнес-об'єктів](https://www.maxzosim.com/data-modelling/)** описує сутності, класи або об'єкти даних, що мають відношення до предметної області, атрибути, які використовуються для їх опису, та зв'язки між ними, щоб забезпечити загальний набір семантики для аналізу та реалізації.

```
@startuml

entity User <<ENTITY>> #b2f31d 
entity User.id <<NUMBER>> #96cdff
entity User.username <<TEXT>> #96cdff
entity User.password <<TEXT>> #96cdff
entity User.email <<TEXT>> #96cdff
entity User.role <<TEXT>> #96cdff
entity User.account_creation_date <<DATETIME>> #96cdff
entity User.last_login_date <<DATETIME>> #96cdff
User.id --* User
User.username --* User
User.password --* User
User.email --* User
User.role --* User
User.account_creation_date --* User
User.last_login_date --* User

entity Data <<ENTITY>> #b2f31d
entity Data.id <<NUMBER>> #96cdff
entity Data.name <<TEXT>> #96cdff
entity Data.content <<TEXT>> #96cdff
entity Data.upload_date <<DATETIME>> #96cdff
entity Data.last_edit_date <<DATETIME>> #96cdff
entity Data.user_id <<NUMBER>> #96cdff
Data.id -d-* Data
Data.name --* Data
Data.content --* Data
Data.upload_date --* Data
Data.last_edit_date --* Data
Data.user_id --* Data

entity Comment <<ENTITY>> #b2f31d
entity Comment.id <<NUMBER>> #96cdff
entity Comment.content <<TEXT>> #96cdff
entity Comment.creation_date <<DATETIME>> #96cdff
entity Comment.user_id <<NUMBER>> #96cdff
entity Comment.data_id <<NUMBER>> #96cdff
Comment.id --* Comment
Comment.content --* Comment
Comment.creation_date --* Comment
Comment.user_id --* Comment
Comment.data_id --* Comment

entity Access <<ENTITY>> #b2f31d
entity Access.id <<NUMBER>> #96cdff
entity Access.user_id <<NUMBER>> #96cdff
entity Access.data_id <<NUMBER>> #96cdff
entity Access.access_type <<TEXT>> #96cdff
Access.id --* Access
Access.user_id --* Access
Access.data_id --* Access
Access.access_type --* Access

entity Session <<ENTITY>> #b2f31d
entity Session.session_id <<NUMBER>> #96cdff
entity Session.user_id <<NUMBER>> #96cdff
entity Session.login_time <<DATETIME>> #96cdff
entity Session.logout_time <<DATETIME>> #96cdff
Session.session_id --* Session
Session.user_id --* Session
Session.login_time --* Session
Session.logout_time --* Session

entity Log <<ENTITY>> #b2f31d
entity Log.log_id <<NUMBER>> #96cdff
entity Log.action_type <<TEXT>> #96cdff
entity Log.action_date <<DATETIME>> #96cdff
entity Log.user_id <<NUMBER>> #96cdff
entity Log.data_id <<NUMBER>> #96cdff
Log.log_id --* Log
Log.action_type --* Log
Log.action_date --* Log
Log.user_id --* Log
Log.data_id --* Log

User "1,1" -u- "0,*" Session
User "1,1" -- "0,*" Access
User "1,1" -- "0,*" Comment
User "1,1" -- "0,*" Log
Data "1,1" -l- "0,*" Comment
Data "1,1" -- "0,*" Access
Log "1,1" -- "0,*" Data

@enduml
```

## ER-модель

**[ER-модель](https://www.bestprog.net/uk/2019/01/24/the-concept-of-er-model-the-concept-of-essence-and-communication-attributes-attribute-types-ua/)** – це представлення бази даних у вигляді наочних графічних діаграм. ER-модель візуалізує процес, що визначає деяку предметну область.

## Реляційна схема

**[Реляційна схема](https://zpls.in.ua/shho-take-relyaciyna-skhema-bazi-danikh-kompanii/)** визначається як набір взаємопов’язаних реляційних таблиць і пов’язаних елементів, що охоплює базові таблиці, представлення даних, індекси, домени, ролі користувачів і збережені модулі, створені для задоволення вимог до даних конкретного підприємства або програм.

## Посилання

1. *[Модель бізнес-об'єктів](https://www.maxzosim.com/data-modelling/)*
2. *[ER-модель](https://www.bestprog.net/uk/2019/01/24/the-concept-of-er-model-the-concept-of-essence-and-communication-attributes-attribute-types-ua/)*
3. *[Реляційна схема](https://zpls.in.ua/shho-take-relyaciyna-skhema-bazi-danikh-kompanii/)*
4. *[UML Editor](https://di.molfar.science/design/uml-editor#/)*
