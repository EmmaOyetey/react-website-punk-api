// import {BeerTypes} from "../../Types/beerTypes"
// //import "./AlbumInfo.scss";
// import {useParams} from "react-router-dom";

// type BeerInfoProps = {
//   beers: BeerTypes[];
// };

// const BeerInfoCard = ({ beers }: BeerInfoProps) => {

//   const {beerId} = useParams();
//   console.log (beerId);

//   const beer = beers.find(beer => beer.id === Number(beerId));
//   if (!beer) return <p>Couldn't find a beer with that id</p>;

//   return (
//     <article className="beer-info">
//       <div className="beer-info__banner">
//         <img className="beer-info__image" src={beer.image_url ?? undefined} alt={beer.name} />
//       </div>
//       <div className="beer-info__content">
//         <h2 className="beer-info__heading">{beer.name}</h2>
//         <p>{beer.description ?? `No description available`}</p>
//         <h2 className="beer-info__heading">Facts</h2>
//         <p>First Brewed: {beer.first_brewed}</p>
//         <ul className="beer-info__facts">
//           <li>
//             Malt Ingredients:
//             <ul>
//               {beer.ingredients?.malt?.map((malt: any, index: number) => (
//                 <li key={index}>{malt.name}</li>
//               ))}
//             </ul>
//           </li>
//           <li>
//             Hops:
//             <ul>
//               {beer.ingredients?.hops?.map((hop: any, index: number) => (
//                 <li key={index}>{hop.name} - {hop.attribute}</li>
//               ))}
//             </ul>
//           </li>
//           <li>
//             Food Pairing:
//             <ul>
//               {beer.food_pairing?.map((pairing: string, index: number) => (
//                 <li key={index}>{pairing}</li>
//               ))}
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </article>
//   );
// };

// export default BeerInfoCard;

