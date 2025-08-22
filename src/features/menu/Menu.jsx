import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

export const loader = async () => {
  const menuData = await getMenu();
  return menuData;
};

function Menu() {
  const menu = useLoaderData();

  return (
    <>
      <h1>Menu</h1>
      {menu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id}></MenuItem>)}
    </>
  );
}

export default Menu;
