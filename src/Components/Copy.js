// const JoinCard = (props) => {
//   const {
//     submitfuncR,
//     submitfuncG,
//     submitfuncY,
//     submitfuncP,
//     tenthWins,
//     checkcolors,
//     color,
//     price,
//     joinfunc,
//     tenthjoins,
//     items,
//   } = props;
//   return (
//     <div className="card">
//       <h2 className="card--heading">Predict and win</h2>
//       <div className="card__left">
//         <div className="card__left__colorarea" id="btn">
//           <button
//             id="btn__red"
//             onClick={submitfuncR}
//             className="card__left__colorarea--button"
//           >
//             Red
//           </button>
//           <button
//             id="btn__green"
//             onClick={submitfuncG}
//             className="card__left__colorarea--button"
//           >
//             Green
//           </button>
//           <button
//             id="btn__yellow"
//             onClick={submitfuncY}
//             className="card__left__colorarea--button"
//           >
//             Yellow
//           </button>
//           <button
//             id="btn__pink"
//             onClick={submitfuncP}
//             className="card__left__colorarea--button"
//           >
//             Pink
//           </button>
//         </div>
//         <div className="card__decision">
//           <div className="  card__decision--div">
//             You joine : <i>{tenthjoins}</i>
//           </div>
//           <div className="beforeSelection  card__decision--div">
//             Select One Color
//           </div>
//           <div className="show after selection card__decision--div">
//             You Choose : <i>{color}</i>
//           </div>
//           <div className="resultchecking card__decision--div">
//             Result : <i>{items || "Not Declared"} </i>
//           </div>
//           {tenthjoins === "yes" ? (
//             tenthWins === "Win" ? (
//               <div className="winning  card__decision--div">You Win</div>
//             ) : (
//               <div className="loosing  card__decision--div"> You Loose !</div>
//             )
//           ) : null}
//         </div>
//         <button className="joinedbtn" onClick={joinfunc}>
//           Joine With Rs {price}
//         </button>
//         <button onClick={checkcolors}>Check</button>
//       </div>
//     </div>
//   );
// };
// <JoinCard
//         price={10}
//         joinfunc={joinetenth}
//         tenthjoins={user?.data?.tenthjoin}
//         tenthWins={user?.data?.tenthWin}
//         color={user?.data?.tenth}
//         submitfuncR={redtenth}
//         submitfuncG={greententh}
//         submitfuncY={yellowtenth}
//         submitfuncP={pinktenth}
//         checkcolors={colorCheck}
//         items={user?.item}
//       />
//       <JoinCard
//         price={20}
//         joinfunc={joinetweenty}
//         tenthjoins={user?.data?.tweentyjoin}
//         tenthWins={user?.data?.tweentyWin}
//         color={user?.data?.tweenty}
//         submitfuncR={redtweenty}
//         submitfuncG={greentweenty}
//         submitfuncY={yellowtweenty}
//         submitfuncP={pinktweenty}
//         items={user?.item}
//       />
//       <JoinCard
//         price={40}
//         joinfunc={joinefourty}
//         tenthjoins={user?.data?.fourtyjoin}
//         tenthWins={user?.data?.fourtyWin}
//         color={user?.data?.fourty}
//         submitfuncR={redfourty}
//         submitfuncG={greenfourty}
//         submitfuncY={yellowfourty}
//         submitfuncP={pinkfourty}
//         items={user?.item}
//       />
//       <JoinCard
//         price={60}
//         joinfunc={joinesixty}
//         tenthjoins={user?.data?.sixtyjoin}
//         tenthWins={user?.data?.sixtyWin}
//         color={user?.data?.sixty}
//         submitfuncR={redsixty}
//         submitfuncG={greensixty}
//         submitfuncY={yellowsixty}
//         submitfuncP={pinksixty}
//         items={user?.item}
//       />
//       <JoinCard
//         price={70}
//         joinfunc={joineseventy}
//         tenthjoins={user?.data?.seventyjoin}
//         tenthWins={user?.data?.seventyWin}
//         color={user?.data?.seventy}
//         submitfuncR={redseventy}
//         submitfuncG={greenseventy}
//         submitfuncY={yellowseventy}
//         submitfuncP={pinkseventy}
//         items={user?.item}
//       />
//       <JoinCard
//         price={100}
//         joinfunc={joinehundred}
//         tenthjoins={user?.data?.hundredjoin}
//         tenthWins={user?.data?.hundredWin}
//         color={user?.data?.hundred}
//         submitfuncR={redhundred}
//         submitfuncG={greenhundred}
//         submitfuncY={yellowhundred}
//         submitfuncP={pinkhundred}
//         items={user?.item}
//       />
//       <JoinCard
//         price={150}
//         joinfunc={joineoneFifty}
//         tenthjoins={user?.data?.oneFiftyjoin}
//         tenthWins={user?.data?.oneFiftyWin}
//         color={user?.data?.oneFifty}
//         submitfuncR={redoneFifty}
//         submitfuncG={greenoneFifty}
//         submitfuncY={yellowoneFifty}
//         submitfuncP={pinkoneFifty}
//         items={user?.item}
//       />
