"use client";

import { ReactElement, ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

interface SparklesTextProps {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The component to be rendered as the text
   * */
  as?: ReactElement;
  /**
   * @default ""
   * @type string
   * @description
   * The className of the text
   */
  className?: string;
  /**
   * @required
   * @type string | ReactNode
   * @description
   * The text to be displayed
   * */
  text: string | ReactNode;
  /**
   * @default 10
   * @type number
   * @description
   * The count of sparkles
   * */
  sparklesCount?: number;
  /**
   * @default "{first: '#9E7AFF', second: '#FE8BBB'}"
   * @type string
   * @description
   * The colors of the sparkles
   * */
  colors?: {
    first: string;
    second: string;
  };
}

const Sparkle = ({
  id,
  color,
  size,
  style,
}: {
  id: string;
  color: string;
  size: number;
  style: React.CSSProperties;
}) => {
  return (
    <motion.svg
      key={id}
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute z-20"
      initial={{ scale: 0, opacity: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        rotate: [0, 90, 180],
      }}
      transition={{
        duration: Math.random() * 1.5 + 0.5,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
      style={style}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </motion.svg>
  );
};

export function SparklesText({
  text,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  sparklesCount = 10,
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Array<{ id: string; size: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: sparklesCount }).map((_, i) => ({
        id: `sparkle-${i}-${Date.now()}`,
        size: Math.random() * 20 + 10,
        style: {
          top: `calc(${Math.random() * 100}% - 10px)`,
          left: `calc(${Math.random() * 100}% - 10px)`,
        },
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, [sparklesCount]);

  return (
    <div className={cn("inline-block relative", className)}>
      {sparkles.map((sparkle, i) => (
        <Sparkle
          key={sparkle.id}
          id={sparkle.id}
          size={sparkle.size}
          style={sparkle.style}
          color={i % 2 === 0 ? colors.first : colors.second}
        />
      ))}
      <span className="relative z-10">{text}</span>
    </div>
  );
}
