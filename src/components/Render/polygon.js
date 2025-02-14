import React from "react";
import { motion } from "framer-motion";

// 计算五角星的顶点坐标
const outerRadius = 50;
const points = [
    [(outerRadius * Math.cos(0 * Math.PI / 180)), (outerRadius * Math.sin(0 * Math.PI / 180))],
    [(outerRadius * Math.cos(72 * Math.PI / 180)), (outerRadius * Math.sin(72 * Math.PI / 180))],
    [(outerRadius * Math.cos(144 * Math.PI / 180)), (outerRadius * Math.sin(144 * Math.PI / 180))],
    [(outerRadius * Math.cos(216 * Math.PI / 180)), (outerRadius * Math.sin(216 * Math.PI / 180))],
    [(outerRadius * Math.cos(288 * Math.PI / 180)), (outerRadius * Math.sin(288 * Math.PI / 180))],
    [(outerRadius * Math.cos(0 * Math.PI / 180)), (outerRadius * Math.sin(0 * Math.PI / 180))], // 闭合星形
].join(' ');

function Star({
    index,
    starSize, // 星形的大小，可以是边长或者外接圆的半径
    staggeredRotationValue,
    trigger,
}) {
    return (
        <motion.polygon
            className="z-20"
            points={points} // 使用计算出的顶点坐标
            fill="rgb(255 255 255)"
            initial={{
                opacity: 0,
                rotate: staggeredRotationValue,
            }}
            animate={{
                opacity: trigger ? 1 : 0,
                rotate: staggeredRotationValue + (360 / 5), // 五角星的旋转角度
            }}
            style={{
                originX: "50%",
                originY: "50%",
            }}
        />
    );
}

export default Star;