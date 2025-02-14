// import React from "react";
// import { motion } from "framer-motion";

// function Ring({
//   index,
//   ringsCount,
//   ringLineWidth,
//   trigger,
//   toggleHeavyAnimations,
// }) {
//   const svgFilterId = React.useId();

//   return (
//     <motion.circle
//       className="z-10"
//       cx="50"
//       cy="50"
//       fill="transparent"
//       stroke={
//         toggleHeavyAnimations ? "url(#colorwheel-bg)" : "rgb(128, 128, 128)"
//       }
//       strokeWidth={ringLineWidth}
//       filter={
//         toggleHeavyAnimations ? `url(#${svgFilterId}saturationFilter)` : "none"
//       }
//       initial={{
//         r: (50 / (ringsCount + 1)) * (index + 1) * 1.1,
//         opacity: 0.25,
//       }}
//       animate={{
//         r: (50 / (ringsCount + 1)) * (index + 1),
//         opacity: trigger ? [0.25, 1, 0.25] : 0.25,
//       }}
//     >
//       {toggleHeavyAnimations && (
//         <filter id={`${svgFilterId}saturationFilter`}>
//           <motion.feColorMatrix
//             type="saturate"
//             animate={{
//               values: trigger ? [0, 1, 0.5, 0] : 0,
//             }}
//           />
//         </filter>
//       )}
//     </motion.circle>
//   );
// }

// export default Ring;


import React from "react";
import { motion } from "framer-motion";

function Ring({
  index,
  ringsCount,
  ringLineWidth,
  trigger,
  toggleHeavyAnimations,
}) {
  const svgFilterId = React.useId();



  // 五边形
  // const radius = 50 / (ringsCount + 1) * (index + 1);
  // let squarePoints = [];
  // let offset =0;
  // for (let i = 0; i < 5; i++) {
  //   const angle = (Math.PI / 5) * i+ offset;
  //   const x = 50 + radius * Math.cos(2 * angle); 
  //   const y = 50 + radius * Math.sin(2 * angle); 
  //   squarePoints.push(`${x},${y}`); 
  // }


  // 正方形
  const radius = 50 / (ringsCount + 1) * (index + 1);
  const centerX = 50;
  const centerY = 50;
  const squarePoints = [];
  let offset = Math.PI / 4;
  for (let i = 0; i < 4; i++) {
    const angle = (Math.PI / 2) * i + offset;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    squarePoints.push(`${x},${y}`);
  }


  // 三角形
  // const radius = 50 / (ringsCount + 1) * (index + 1);
  // const centerX = 50; 
  // const centerY = 50; 

  // const squarePoints = [];
  // let offset = Math.PI / 4; 
  // for (let i = 0; i < 4; i++) {
  //   const angle = (Math.PI / 2) * i + offset; 
  //   const x = centerX + radius * Math.cos(angle); 
  //   const y = centerY + radius * Math.sin(angle); 
  //   squarePoints.push(`${x},${y}`); 
  //   offset += Math.PI / 6;
  // }


  // 连接正方形的第一个顶点和最后一个顶点来闭合形状
  squarePoints.push(squarePoints[0]);

  // return (
  //   <motion.polygon
  //     className="z-10"
  //     points={squarePoints.join(" ")}

  //     fill="transparent"
  //     stroke={
  //       toggleHeavyAnimations ? "url(#colorwheel-bg)" : "rgb(128, 128, 128)"
  //     }

  //     strokeWidth={ringLineWidth}
  //     filter={
  //       toggleHeavyAnimations ? `url(#${svgFilterId}saturationFilter)` : "none"
  //     }
  //     initial={{
  //       r: (50 / (ringsCount + 1)) * (index + 1) * 1.1,
  //       opacity: 0.25,
  //     }}
  //     animate={{
  //       r: (50 / (ringsCount + 1)) * (index + 1) * 1,
  //       opacity: trigger ? [0.25, 1, 0.25] : 0.25,
  //     }}
  //   >
  //     {toggleHeavyAnimations && (
  //       <filter id={`${svgFilterId}saturationFilter`}>
  //         <motion.feColorMatrix
  //           type="saturate"
  //           animate={{
  //             values: trigger ? [0, 1, 0.5, 0] : 0,
  //           }}
  //         />
  //       </filter>
  //     )}
  //   </motion.polygon >
  // );


  return (
    <motion.polygon
      className="z-10"
      points={squarePoints.join(" ")}
      fill="transparent"
      stroke={toggleHeavyAnimations ? "url(#colorwheel-bg)" : "rgb(128, 128, 128)"}
      strokeWidth={ringLineWidth}
      filter={toggleHeavyAnimations ? `url(#${svgFilterId}saturationFilter)` : "none"}
      initial={{
        opacity: 0.55,
      }}
      animate={{
        opacity: trigger ? [0.25, 1, 0.75] : 1,
        rotate: trigger ? [0, 360] : 0,
      }}
      transition={{
        duration: 5,
        ease: "linear",
        delay: index * 0.2,
      }}
    >
      {toggleHeavyAnimations && (
        <filter id={`${svgFilterId}saturationFilter`}>
          <motion.feColorMatrix
            type="saturate"
            animate={{
              values: trigger ? [0, 1.5, 1, 0] : 1, // 增加饱和度
            }}
          />
          {/* <feComponentTransfer>
            <feFuncR type="table" tableValues="0 1.2" />
            <feFuncG type="table" tableValues="0 1.2" />
            <feFuncB type="table" tableValues="0 1.2" />
          </feComponentTransfer> */}
        </filter>
      )}
    </motion.polygon>
  );

}

export default Ring;