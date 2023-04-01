export const deleteCart =async (id:number)=>{
    const response = await fetch(`https://dummyjson.com/carts/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return {};
    }
    const data = await response.json();
    return data;
}