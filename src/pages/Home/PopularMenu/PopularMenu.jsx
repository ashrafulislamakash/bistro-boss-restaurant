import TextComponent from "../../../components/TextComponent";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="container mx-auto my-24">
      <TextComponent
        subTitle={"---Check it out---"}
        title={"FROM OUR MENU"}
      ></TextComponent>

      <div className=" gap-12 grid grid-cols-1 lg:grid-cols-2 ">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button className="py-5 font-bold text-lg px-16 border-b-4 rounded-xl hover:bg-dark1 hover:text-white  ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
