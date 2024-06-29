// import Close from "../../assets/images/Close.png";
// import shareBox from "../../assets/images/shareBox.png";
// import AirDrop from "../../assets/images/AirDrop.png";
// import insta from "../../assets/images/insta.png";
// import tiktok from "../../assets/images/tiktok.png";
// import snapchat from "../../assets/images/snapchat.png";
// import ex from "../../assets/images/ex.png";
// import copy from "../../assets/images/copy.png";
// import deletee from "../../assets/images/closeCall.png";
// import { fetchNui } from "../../../utils/fetchNui";

// const apps = [
//     {
//         id: 1,
//         name: "AirDrop",
//         icon: AirDrop,
//     },
//     {
//         id: 2,
//         name: "Instashot",
//         icon: insta,
//     },
//     {
//         id: 3,
//         name: "TickTacTok",
//         icon: tiktok,
//     },
//     {
//         id: 4,
//         name: "Snapshot",
//         icon: snapchat,
//     },
//     {
//         id: 5,
//         name: "Ex",
//         icon: ex,
//     },
// ];

// function ShareBox ()
// {
//     const handleDelete = (id) => {
//         fetchNui('delGalleryImg', {id: id});
//     }

//     return (
//         <div className="absolute w-full h-[400px] bottom-0 left-0 bg-[#1c1c1e] p-5 rounded-3xl">
//             <div className="w-full flex justify-between items-center">
//                 <div className="flex justify-center items-center gap-2">
//                     <img src={shareBox} alt="shareBox" />
//                     <div className="flex flex-col justify-center items-start ">
//                         <h3>Image</h3>
//                         <p className="text-xs opacity-50">Gallery</p>
//                     </div>
//                 </div>
//                 <img src={Close} alt="Close" />
//             </div>
//             <div className="w-full flex justify-between items-center mt-7">
//                 {apps.map( ( item ) => (
//                     <div
//                         key={item.id}
//                         className="flex flex-col justify-center items-center gap-1"
//                     >
//                         <div>
//                             <img src={item.icon} alt={item.name} className="w-[60px] h-[60px]" />
//                         </div>
//                         <p>{item.name}</p>
//                     </div>
//                 ) )}
//             </div>
//             <div className="w-full flex flex-col justify-center gap-7 bg-[#2c2c2e] mt-7 p-4 rounded-2xl" >
//                 <div className="flex justify-between items-center ">
//                     <h3>Copy</h3>
//                     <img src={copy} alt="copy" />
//                 </div>
//                 <div className="flex justify-between items-center">
//                     <h3>Delete</h3>
//                     <img src={deletee} alt="Delete" onClick={() => handleDelete(item.id)} />
//                 </div>
//             </div>
//             <button className="text-[#007aff]  mt-5">Edit Actions...</button>
//         </div>
//     );
// }

// export default ShareBox;
