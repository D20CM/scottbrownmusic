import css from "./phototile.module.css";
function PhotoTile({ url }) {
  //   const url =
  //     "https://scontent.cdninstagram.com/v/t51.29350-15/434990834_1596393164493408_7113099633520998426_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=94b3P70DHUoQ7kNvgEeTAsm&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AYADehoQ0mlZgyxejsmzRArLk4sIpO2bGzSuLjsHDHq3kg&oe=66CD66C4";

  console.log("In tile component: url is ", url);

  return (
    <div className={css.phototile}>
      <img src={url}></img>
    </div>
  );
}

export default PhotoTile;
