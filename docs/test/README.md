# Тестування працездатності системи

## Короткий зміст

- [Тестування працездатності системи](#тестування-працездатності-системи)
  - [Основний сценарій для Data](#основний-сценарій-для-data)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)
    - [PATCH](#patch)
  - [Основний сценарій для Category](#основний-сценарій-для-category)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)
    - [PATCH](#patch)
  - [Виключні ситуації для Data](#виключні-ситуації-для-data)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)
    - [PATCH](#patch)
  - [Виключні ситуації для Category](#виключні-ситуації-для-category)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)
    - [PATCH](#patch)

## Основний сценарій для Data
### GET
Get-запит на отримання всіх даних
![](./images/data-base/1.1.png)

Get-запит на отримання даних за id
![](./images/data-base/1.2.png)

### POST
Post-запит на додавання даних з усіма заповненими полями
![](./images/data-base/2.1.png)

Post-запит на додавання даних без id, upload_date, last_edit_date
*Примітка. Для id встановлено autoincrement, для upload_date за замовчуванням встановлюються поточні дата і час, для last_edit_date за замовчуванням встановлюється null.*
![](./images/data-base/2.2.png)

### PUT
Put-запит на оновлення id, name, content та category
*Дані до оновлення*
![](./images/data-base/3.1.1.png)
*Оновлення даних*
![](./images/data-base/3.1.2.png)

### DELETE
Delete-запит на видалення даних
*Перевірка існування даних*
![](./images/data-base/4.1.1.png)
*Видалення даних*
![](./images/data-base/4.1.2.png)
*Перевірка видалення даних*
![](./images/data-base/4.1.3.png)

### PATCH
Patch-запит на оновлення name
*Дані до оновлення*
![](./images/data-base/5.1.1.png)
*Оновлення name*
![](./images/data-base/5.1.2.png)

## Основний сценарій для Category
### GET
