
const authHeader = () => {
    const token = localStorage.getItem("token");

    let header = {};

    if(token){
        header = { Authorization: `Bearer ${token}` }
    }

    return header;
}

export default authHeader;