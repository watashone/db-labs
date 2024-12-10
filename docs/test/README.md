# Тестування працездатності системи

## Короткий зміст

- [Тестування працездатності системи](#тестування-працездатності-системи)
  - [Основний сценарій для User](#основний-сценарій-для-user)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)
  - [Основний сценарій для Session](#основний-сценарій-для-session)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)
  - [Виключні ситуації для User](#виключні-ситуації-для-user)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)
  - [Виключні ситуації для Session](#виключні-ситуації-для-session)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)

## Основний сценарій для User
### GET
Get-запит на отримання всіх даних
![](./images/user-base/1.1.png)

Get-запит на отримання даних по ID
![](./images/user-base/1.2.png)

### POST
Post-запит на додавання даних з усіма заповненими полями
![](./images/user-base/2.1.png)

Get-запит на отримання даних створеного User
![](./images/user-base/2.2.png)

### PUT
Put-запит на оновлення name
![](./images/user-base/3.1.png)

Get-запит на отримання даних оновленого User
![](./images/user-base/3.2.png)

### DELETE
Delete-запит на видалення даних
![](./images/user-base/4.1.png)

Get-запит на отримання всіх даних (User з ID 5 зник)
![](./images/user-base/4.2.png)

## Основний сценарій для Session
### GET
Get-запит на отримання всіх даних
![](./images/session-base/1.1.png)

Get-запит на отримання даних по ID
![](./images/session-base/1.2.png)

### POST
Post-запит на додавання даних з усіма заповненими полями
![](./images/session-base/2.1.png)

Get-запит на отримання даних створеного Session
![](./images/session-base/2.2.png)

### PUT
Put-запит на оновлення logout_time
![](./images/session-base/3.1.png)

Get-запит на отримання даних оновленого Session
![](./images/session-base/3.2.png)

### DELETE
Delete-запит на видалення даних
![](./images/session-base/4.1.png)

Get-запит на отримання всіх даних (Session з ID 6 зник)
![](./images/session-base/4.2.png)

## Виключні ситуації для User
### GET
Немає User за заданим ID
![](./images/user-error/1.1.png)

Недійсний або відсутній ID користувача
![](./images/user-error/1.2.png)

### POST
User за заданим ID вже існує
![](./images/user-error/2.1.png)

Необхідно заповнити всі обов'язкові поля
![](./images/user-error/2.2.png)

Вже використовується email
![](./images/user-error/2.3.png)

Role не існує, неможливо створити User
![](./images/user-error/2.4.png)


### PUT
Немає User за заданим ID
![](./images/user-error/3.1.png)

Необхідно заповнити всі обов'язкові поля
![](./images/user-error/3.2.png)

Вже використовується email
![](./images/user-error/3.3.png)

Role не існує, неможливо оновити User
![](./images/user-error/3.4.png)

### DELETE
Немає User за заданим ID
![](./images/user-error/4.1.png)

## Виключні ситуації для Session

### GET
Немає Session за заданим ID
![](./images/session-error/1.1.png)

Недійсний або відсутній ID користувача
![](./images/session-error/1.2.png)

### POST
Session за заданим ID вже існує
![](./images/session-error/2.1.png)

Необхідно заповнити всі обов'язкові поля
![](./images/session-error/2.2.png)

User не існує, неможливо створити Session
![](./images/session-error/2.3.png)

### PUT
Немає Session за заданим ID
![](./images/session-error/3.1.png)

Необхідно заповнити всі обов'язкові поля
![](./images/session-error/3.2.png)

User не існує, неможливо оновити Session
![](./images/session-error/3.3.png)

### DELETE
Немає Session за заданим ID
![](./images/session-error/4.1.png)

