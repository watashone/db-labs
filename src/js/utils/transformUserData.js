const transformUserData = (data) => {
    return {
        id: data.id,
        name: data.name,
        password: data.password,
        email: data.email,
        creationDate: data.account_creation_date,
        lastLoginDate: data.last_login_date,
        roleId: data.Role_id
    };
};

export default transformUserData;