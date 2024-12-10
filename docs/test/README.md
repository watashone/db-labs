# Тестування працездатності системи

## Короткий зміст

- [Тестування працездатності системи](#тестування-працездатності-системи)
  - [Основний сценарій для User](#основний-сценарій-для-user)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)
    - [PATCH](#patch)
  - [Основний сценарій для Session](#основний-сценарій-для-session)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)
    - [PATCH](#patch)
  - [Виключні ситуації для User](#виключні-ситуації-для-user)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)
    - [PATCH](#patch)
  - [Виключні ситуації для Session](#виключні-ситуації-для-session)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)
    - [PATCH](#patch)

## Основний сценарій для User
### GET
Get-запит на отримання всіх даних
![](images/session-base/1.1.png)

### POST
Post-запит на додавання даних з усіма заповненими полями
![](images/session-base/2.1.png)

### PUT
Put-запит на оновлення id, name, content та category
![](images/session-base/3.1.1.png)

### DELETE
Delete-запит на видалення даних
![](images/session-base/4.1.1.png)

### PATCH
Patch-запит на оновлення name
![](images/session-base/5.1.1.png)

## Основний сценарій для Session
### GET
Get-запит на отримання всіх категорій
![](images/user-base/1.1.png)

### POST
Post-запит на додавання категорії з усіма заповненими полями
![](images/user-base/2.1.png)

### PUT
Put-запит на оновлення id, name, description
![](images/user-base/3.1.1.png)

### DELETE
Delete-запит на видалення категорії
![](images/user-base/4.1.1.png)

### PATCH
Patch-запит на оновлення id
![](images/user-base/5.1.1.png)

## Виключні ситуації для User
### GET
Немає даних із заданим id
![](images/session-error/1.1.png)

### POST
Введено не всі дані, що є обов’язковими для заповнення
![](images/session-error/2.1.png)

### PUT
Введено не всі дані, що є обов’язковими для заповнення
![](images/session-error/3.1.png)

### DELETE
Немає даних із заданим id 
![](images/session-error/4.1.png)

### PATCH
Немає даних із заданим id
![](images/session-error/5.1.png)

## Виключні ситуації для Session

### GET
Немає категорії із заданим id
![](images/user-error/1.1.png)

### POST
Введено не всі дані, що є обов’язковими для заповнення
![](images/user-error/2.1.png)

### PUT
Введено не всі дані, що є обов’язковими для заповнення
![](images/user-error/3.1.png)

### DELETE
Немає категорії із заданим id 
![](images/user-error/4.1.png)

### PATCH
Немає категорії із заданим id
![](images/user-error/5.1.png)

