import React from 'react';

const LAFLogo = ({ className = "h-16 md:h-20 w-auto" }) => {
  return (
    <svg
      viewBox="0 0 540 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300 hover:scale-105 select-none`}
    >
      <defs>
        {/* प्रीमियम आर्किटेक्चर ग्रेडिएंट्स */}
        <linearGradient id="mapGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#EA580C" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        <filter id="softShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* 1. बैकग्राउंड मैप शेप (Gradient Silhouette) */}
      <path
        d="M 60,35 Q 90,20 120,40 Q 150,15 190,45 Q 230,20 270,70 Q 285,120 260,175 Q 250,220 210,250 Q 180,275 140,255 Q 90,285 70,240 Q 30,225 35,170 Q 15,125 35,75 Z"
        fill="url(#mapGradient3)"
        opacity="0.85"
      />

      {/* 2. बोल्ड 3D शैडो (Isometric projection) */}
      <g opacity="0.45" fill="url(#mapGradient3)" transform="translate(14, -14)">
        {/* 'L' Shadow */}
        <path d="M 60,35 L 95,35 L 95,150 L 160,150 L 160,185 L 60,185 Z" />
        {/* 'A' Shadow */}
        <polygon points="120,185 155,75 195,75 230,185 195,185 185,150 165,150 155,185" />
        {/* 'F' Shadow */}
        <path d="M 215,85 L 285,85 L 285,115 L 245,115 L 245,135 L 275,135 L 275,165 L 245,165 L 245,245 L 215,245 Z" />
      </g>

      {/* 3. मेन ब्लैक 'LAF' टाइफोग्राफी (शार्प & सॉलिड) */}
      <g fill="#111827" filter="url(#softShadow)">
        {/* L */}
        <path d="M 60,35 H 95 V 150 H 160 V 185 H 60 Z" />
        
        {/* A */}
        <polygon points="120,185 155,75 195,75 230,185 195,185 186,152 164,152 155,185" />
        <polygon points="175,98 168,130 182,130" fill="#ffffff" />
        
        {/* F */}
        <path d="M 215,85 H 285 V 115 H 248 V 135 H 275 V 165 H 248 V 245 H 215 Z" />
      </g>

      {/* 4. राइट साइड टेक्स्ट (LUCKNOW ARCHITECTURE FESTIVAL) */}
      <text
        x="295"
        y="65"
        fill="#0f172a"
        fontFamily="Inter, 'Segoe UI', sans-serif"
        fontWeight="900"
        fontSize="34"
        letterSpacing="1.5"
      >
        LUCKNOW
      </text>

      <text
        x="295"
        y="108"
        fill="#0f172a"
        fontFamily="Inter, 'Segoe UI', sans-serif"
        fontWeight="900"
        fontSize="29"
        letterSpacing="0.8"
      >
        ARCHITECTURE
      </text>

      <text
        x="295"
        y="150"
        fill="#0f172a"
        fontFamily="Inter, 'Segoe UI', sans-serif"
        fontWeight="900"
        fontSize="31"
        letterSpacing="2.5"
      >
        FESTIVAL
      </text>

      {/* 5. अपडेटेड '3.0' (प्रीमियम स्टाइल में) */}
      {/* 3.0 का शैडो */}
      <text
        x="368"
        y="254"
        fill="url(#mapGradient3)"
        fontFamily="Inter, 'Segoe UI', sans-serif"
        fontWeight="950"
        fontSize="108"
        letterSpacing="-2"
        opacity="0.8"
      >
        3.0
      </text>

      {/* 3.0 मेन सॉलिड टेक्स्ट */}
      <text
        x="360"
        y="262"
        fill="#111827"
        fontFamily="Inter, 'Segoe UI', sans-serif"
        fontWeight="950"
        fontSize="108"
        letterSpacing="-2"
      >
        3.0
      </text>

      {/* प्रीमियम अंडरलाइन एक्सेंट बार */}
      <rect x="295" y="162" width="220" height="3.5" rx="1.75" fill="url(#accentGrad)" />
    </svg>
  );
};

export default LAFLogo;