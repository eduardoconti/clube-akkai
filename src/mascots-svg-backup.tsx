/**
 * BACKUP DOS SVGs DOS MASCOTES KAI E ALI
 * Use estes SVGs se precisar recriar os componentes no futuro.
 *
 * Para usar, substitua os componentes KaiMascot e AliMascot no app.tsx
 * pelos SVGs abaixo e remova a importação das imagens.
 */

// KAI SVG - Robô Amarelo e Azul
export const KAI_SVG = `
<svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" aria-label="Kai, o robô amarelo e azul">
  <defs>
    <radialGradient id="kaiHeadGrad" cx="35%" cy="35%">
      <stop offset="0%" stopColor="#FFE55C"/>
      <stop offset="100%" stopColor="#FFC700"/>
    </radialGradient>
    <radialGradient id="kaiEyeGrad" cx="30%" cy="30%">
      <stop offset="0%" stopColor="#FFFFFF"/>
      <stop offset="100%" stopColor="#F0F0F0"/>
    </radialGradient>
    <radialGradient id="kaiIrisGrad" cx="30%" cy="30%">
      <stop offset="0%" stopColor="#5BAEE8"/>
      <stop offset="100%" stopColor="#1E5BA8"/>
    </radialGradient>
  </defs>

  <!-- Shadow -->
  <ellipse cx="120" cy="300" rx="60" ry="12" fill="rgba(0,0,0,0.2)"/>

  <!-- Antenna Base -->
  <rect x="113" y="8" width="14" height="18" rx="7" fill="#4A90D9"/>
  <rect x="114" y="6" width="12" height="4" rx="2" fill="#6BA8E8"/>

  <!-- Antenna Ball -->
  <circle cx="120" cy="18" r="16" fill="url(#kaiEyeGrad)"/>
  <circle cx="120" cy="18" r="14" fill="#5BAEE8"/>
  <ellipse cx="115" cy="14" rx="5" ry="6" fill="#7FBEF5" opacity="0.6"/>
  <circle cx="118" cy="12" r="3" fill="rgba(255,255,255,0.7)"/>

  <!-- Head Container -->
  <rect x="60" y="30" width="120" height="110" rx="20" fill="url(#kaiHeadGrad)"/>
  <rect x="60" y="30" width="120" height="110" rx="20" fill="none" stroke="#D4A500" strokeWidth="1" opacity="0.4"/>
  <path d="M 80 35 Q 120 32 140 38" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>

  <!-- Visor Frame -->
  <rect x="75" y="42" width="90" height="38" rx="12" fill="#2C3E50"/>
  <rect x="76" y="43" width="88" height="36" rx="11" fill="#34495E"/>

  <!-- Visor Screen -->
  <rect x="80" y="48" width="80" height="28" rx="8" fill="#1A3A52"/>
  <rect x="80" y="48" width="80" height="28" rx="8" fill="#0F5A8F" opacity="0.7"/>

  <!-- Pixel Art A -->
  <g transform="translate(120, 62)">
    <rect x="-8" y="-6" width="4" height="4" fill="#5BAEE8"/>
    <rect x="-4" y="-6" width="4" height="4" fill="#5BAEE8"/>
    <rect x="0" y="-6" width="4" height="4" fill="#5BAEE8"/>
    <rect x="4" y="-6" width="4" height="4" fill="#5BAEE8"/>
    <rect x="-10" y="-2" width="4" height="4" fill="#5BAEE8"/>
    <rect x="6" y="-2" width="4" height="4" fill="#5BAEE8"/>
    <rect x="-10" y="2" width="4" height="4" fill="#5BAEE8"/>
    <rect x="-6" y="2" width="4" height="4" fill="#5BAEE8"/>
    <rect x="-2" y="2" width="4" height="4" fill="#5BAEE8"/>
    <rect x="2" y="2" width="4" height="4" fill="#5BAEE8"/>
    <rect x="6" y="2" width="4" height="4" fill="#5BAEE8"/>
    <rect x="-10" y="6" width="4" height="4" fill="#5BAEE8"/>
    <rect x="6" y="6" width="4" height="4" fill="#5BAEE8"/>
  </g>

  <!-- Eyes -->
  <circle cx="95" cy="95" r="20" fill="white"/>
  <circle cx="95" cy="95" r="18" fill="url(#kaiEyeGrad)"/>
  <circle cx="95" cy="97" r="12" fill="url(#kaiIrisGrad)"/>
  <circle cx="92" cy="92" r="4" fill="rgba(255,255,255,0.8)"/>
  <circle cx="95" cy="97" r="2" fill="#000"/>

  <circle cx="145" cy="95" r="20" fill="white"/>
  <circle cx="145" cy="95" r="18" fill="url(#kaiEyeGrad)"/>
  <circle cx="145" cy="97" r="12" fill="url(#kaiIrisGrad)"/>
  <circle cx="142" cy="92" r="4" fill="rgba(255,255,255,0.8)"/>
  <circle cx="145" cy="97" r="2" fill="#000"/>

  <!-- Cheeks -->
  <ellipse cx="75" cy="110" rx="8" ry="6" fill="#FF6B9D" opacity="0.5"/>
  <ellipse cx="165" cy="110" rx="8" ry="6" fill="#FF6B9D" opacity="0.5"/>

  <!-- Mouth -->
  <path d="M 105 125 Q 120 135 135 125" stroke="#FF1A3D" strokeWidth="3" fill="none" strokeLinecap="round"/>
  <path d="M 105 125 Q 120 132 135 125" fill="#FF6B9D" opacity="0.4"/>

  <!-- Head Side Armor -->
  <rect x="55" y="50" width="8" height="70" rx="4" fill="#4A90D9"/>
  <rect x="55" y="50" width="8" height="35" rx="4" fill="#7FBEF5" opacity="0.4"/>
  <rect x="177" y="50" width="8" height="70" rx="4" fill="#4A90D9"/>
  <rect x="177" y="50" width="8" height="35" rx="4" fill="#7FBEF5" opacity="0.4"/>

  <!-- Neck Connector -->
  <rect x="100" y="135" width="40" height="12" rx="6" fill="#FFD700"/>
  <rect x="100" y="135" width="40" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>

  <!-- Body -->
  <rect x="55" y="145" width="130" height="90" rx="15" fill="url(#kaiHeadGrad)"/>
  <rect x="55" y="145" width="130" height="45" rx="15" fill="rgba(255,255,255,0.2)"/>

  <!-- Chest Plate -->
  <rect x="75" y="160" width="90" height="50" rx="12" fill="#E8E8E8"/>
  <rect x="76" y="161" width="88" height="48" rx="11" fill="#FFFFFF"/>
  <rect x="76" y="161" width="88" height="24" rx="11" fill="rgba(200,200,200,0.1)"/>

  <!-- Buttons -->
  <circle cx="100" cy="175" r="6" fill="#4A90D9"/>
  <circle cx="100" cy="175" r="4" fill="#5BAEE8"/>
  <circle cx="99" cy="173" r="1.5" fill="rgba(255,255,255,0.7)"/>

  <circle cx="120" cy="175" r="6" fill="#E74C3C"/>
  <circle cx="120" cy="175" r="4" fill="#FF6B5B"/>
  <circle cx="119" cy="173" r="1.5" fill="rgba(255,255,255,0.7)"/>

  <rect x="137" y="171" width="6" height="6" rx="1" fill="#2ECC71"/>
  <rect x="137" y="171" width="6" height="3" rx="1" fill="#27AE60"/>

  <!-- Chest Accent -->
  <rect x="85" y="188" width="70" height="2" fill="#4A90D9" opacity="0.3"/>

  <!-- Waist Band -->
  <rect x="60" y="230" width="120" height="12" rx="6" fill="#4A90D9"/>
  <rect x="60" y="230" width="120" height="6" rx="3" fill="#7FBEF5" opacity="0.4"/>

  <!-- Left Arm -->
  <rect x="40" y="160" width="18" height="50" rx="9" fill="#2C3E50"/>
  <rect x="40" y="160" width="18" height="25" rx="9" fill="#34495E" opacity="0.5"/>

  <!-- Left Glove -->
  <circle cx="49" cy="215" r="14" fill="#2C3E50"/>
  <circle cx="49" cy="215" r="12" fill="#1A252F"/>
  <rect x="43" y="205" width="5" height="8" rx="2.5" fill="#000"/>
  <rect x="49" y="202" width="5" height="8" rx="2.5" fill="#000"/>
  <rect x="55" y="205" width="5" height="8" rx="2.5" fill="#000"/>

  <!-- Right Arm (Wave) -->
  <g id="kai-arm-wave" transform-origin="191px 160px">
    <rect x="182" y="160" width="18" height="50" rx="9" fill="#2C3E50"/>
    <rect x="182" y="160" width="18" height="25" rx="9" fill="#34495E" opacity="0.5"/>

    <!-- Right Glove -->
    <circle cx="191" cy="215" r="14" fill="#2C3E50"/>
    <circle cx="191" cy="215" r="12" fill="#1A252F"/>
    <rect x="185" y="205" width="5" height="8" rx="2.5" fill="#000"/>
    <rect x="191" y="202" width="5" height="8" rx="2.5" fill="#000"/>
    <rect x="197" y="205" width="5" height="8" rx="2.5" fill="#000"/>
  </g>

  <!-- Legs -->
  <rect x="75" y="245" width="22" height="45" rx="11" fill="#4A90D9"/>
  <rect x="75" y="245" width="22" height="22" rx="11" fill="#7FBEF5" opacity="0.4"/>

  <ellipse cx="86" cy="295" rx="16" ry="10" fill="#FFD700"/>
  <ellipse cx="86" cy="293" rx="14" ry="8" fill="#FFE55C"/>
  <rect x="76" y="290" width="20" height="4" rx="2" fill="rgba(0,0,0,0.1)"/>

  <rect x="143" y="245" width="22" height="45" rx="11" fill="#4A90D9"/>
  <rect x="143" y="245" width="22" height="22" rx="11" fill="#7FBEF5" opacity="0.4"/>

  <ellipse cx="154" cy="295" rx="16" ry="10" fill="#FFD700"/>
  <ellipse cx="154" cy="293" rx="14" ry="8" fill="#FFE55C"/>
  <rect x="144" y="290" width="20" height="4" rx="2" fill="rgba(0,0,0,0.1)"/>

  <rect x="80" y="300" width="12" height="4" rx="2" fill="#2C3E50"/>
  <rect x="148" y="300" width="12" height="4" rx="2" fill="#2C3E50"/>
</svg>
`;

// ALI SVG - Robô Rosa e Roxo
export const ALI_SVG = `
<svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" aria-label="Ali, o robô rosa e roxo">
  <defs>
    <radialGradient id="aliHeadGrad" cx="35%" cy="35%">
      <stop offset="0%" stopColor="#FF88C8"/>
      <stop offset="100%" stopColor="#FF66B2"/>
    </radialGradient>
    <radialGradient id="aliEyeGrad" cx="30%" cy="30%">
      <stop offset="0%" stopColor="#FFFFFF"/>
      <stop offset="100%" stopColor="#F0F0F0"/>
    </radialGradient>
    <radialGradient id="aliIrisGrad" cx="30%" cy="30%">
      <stop offset="0%" stopColor="#5BAEE8"/>
      <stop offset="100%" stopColor="#1E5BA8"/>
    </radialGradient>
  </defs>

  <!-- Shadow -->
  <ellipse cx="120" cy="300" rx="60" ry="12" fill="rgba(0,0,0,0.2)"/>

  <!-- Antenna Base -->
  <rect x="113" y="8" width="14" height="18" rx="7" fill="#7B4A96"/>
  <rect x="114" y="6" width="12" height="4" rx="2" fill="#A870C2"/>

  <!-- Antenna Heart -->
  <g transform="translate(120, 20)">
    <circle cx="-7" cy="-2" r="8" fill="#5BAEE8"/>
    <circle cx="7" cy="-2" r="8" fill="#5BAEE8"/>
    <path d="M -10 2 Q 0 12 10 2" fill="#5BAEE8"/>
    <circle cx="-5" cy="-4" r="1.5" fill="rgba(255,255,255,0.7)"/>
  </g>

  <!-- Head Container -->
  <rect x="60" y="30" width="120" height="110" rx="20" fill="url(#aliHeadGrad)"/>
  <rect x="60" y="30" width="120" height="110" rx="20" fill="none" stroke="#D946A6" strokeWidth="1" opacity="0.4"/>
  <path d="M 80 35 Q 120 32 140 38" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>

  <!-- Visor Frame -->
  <rect x="75" y="42" width="90" height="38" rx="12" fill="#6B4A8F"/>
  <rect x="76" y="43" width="88" height="36" rx="11" fill="#7B5BA3"/>

  <!-- Visor Screen -->
  <rect x="80" y="48" width="80" height="28" rx="8" fill="#3D1F5A"/>
  <rect x="80" y="48" width="80" height="28" rx="8" fill="#5A3A7F" opacity="0.7"/>

  <!-- Pixel Art A -->
  <g transform="translate(120, 62)">
    <rect x="-8" y="-6" width="4" height="4" fill="#D946A6"/>
    <rect x="-4" y="-6" width="4" height="4" fill="#D946A6"/>
    <rect x="0" y="-6" width="4" height="4" fill="#D946A6"/>
    <rect x="4" y="-6" width="4" height="4" fill="#D946A6"/>
    <rect x="-10" y="-2" width="4" height="4" fill="#D946A6"/>
    <rect x="6" y="-2" width="4" height="4" fill="#D946A6"/>
    <rect x="-10" y="2" width="4" height="4" fill="#D946A6"/>
    <rect x="-6" y="2" width="4" height="4" fill="#D946A6"/>
    <rect x="-2" y="2" width="4" height="4" fill="#D946A6"/>
    <rect x="2" y="2" width="4" height="4" fill="#D946A6"/>
    <rect x="6" y="2" width="4" height="4" fill="#D946A6"/>
    <rect x="-10" y="6" width="4" height="4" fill="#D946A6"/>
    <rect x="6" y="6" width="4" height="4" fill="#D946A6"/>
  </g>

  <!-- Eyes -->
  <circle cx="95" cy="95" r="20" fill="white"/>
  <circle cx="95" cy="95" r="18" fill="url(#aliEyeGrad)"/>
  <circle cx="95" cy="97" r="12" fill="url(#aliIrisGrad)"/>
  <circle cx="92" cy="92" r="4" fill="rgba(255,255,255,0.8)"/>
  <circle cx="95" cy="97" r="2" fill="#000"/>

  <circle cx="145" cy="95" r="20" fill="white"/>
  <circle cx="145" cy="95" r="18" fill="url(#aliEyeGrad)"/>
  <circle cx="145" cy="97" r="12" fill="url(#aliIrisGrad)"/>
  <circle cx="142" cy="92" r="4" fill="rgba(255,255,255,0.8)"/>
  <circle cx="145" cy="97" r="2" fill="#000"/>

  <!-- Cheeks -->
  <ellipse cx="75" cy="110" rx="8" ry="6" fill="#FF6B9D" opacity="0.6"/>
  <ellipse cx="165" cy="110" rx="8" ry="6" fill="#FF6B9D" opacity="0.6"/>

  <!-- Mouth -->
  <path d="M 105 125 Q 120 135 135 125" stroke="#E91E8C" strokeWidth="3" fill="none" strokeLinecap="round"/>
  <path d="M 105 125 Q 120 132 135 125" fill="#FF88C8" opacity="0.4"/>

  <!-- Head Side Armor -->
  <rect x="55" y="50" width="8" height="70" rx="4" fill="#7B4A96"/>
  <rect x="55" y="50" width="8" height="35" rx="4" fill="#A870C2" opacity="0.4"/>
  <rect x="177" y="50" width="8" height="70" rx="4" fill="#7B4A96"/>
  <rect x="177" y="50" width="8" height="35" rx="4" fill="#A870C2" opacity="0.4"/>

  <!-- Neck Connector -->
  <rect x="100" y="135" width="40" height="12" rx="6" fill="#FF88C8"/>
  <rect x="100" y="135" width="40" height="6" rx="3" fill="rgba(255,255,255,0.3)"/>

  <!-- Body -->
  <rect x="55" y="145" width="130" height="90" rx="15" fill="url(#aliHeadGrad)"/>
  <rect x="55" y="145" width="130" height="45" rx="15" fill="rgba(255,255,255,0.2)"/>

  <!-- Chest Plate -->
  <rect x="75" y="160" width="90" height="50" rx="12" fill="#E8E8E8"/>
  <rect x="76" y="161" width="88" height="48" rx="11" fill="#FFFFFF"/>
  <rect x="76" y="161" width="88" height="24" rx="11" fill="rgba(200,200,200,0.1)"/>

  <!-- Hearts on Chest -->
  <g transform="translate(100, 178)">
    <circle cx="-12" cy="-2" r="5" fill="#E91E8C"/>
    <circle cx="-6" cy="-2" r="5" fill="#E91E8C"/>
    <path d="M -16 2 Q -9 8 -2 2" fill="#E91E8C"/>
  </g>

  <g transform="translate(140, 178)">
    <circle cx="-12" cy="-2" r="5" fill="#E91E8C"/>
    <circle cx="-6" cy="-2" r="5" fill="#E91E8C"/>
    <path d="M -16 2 Q -9 8 -2 2" fill="#E91E8C"/>
  </g>

  <!-- Chest Center Accent -->
  <rect x="110" y="188" width="20" height="15" rx="3" fill="#7B4A96" opacity="0.2"/>

  <!-- Waist Band -->
  <rect x="60" y="230" width="120" height="12" rx="6" fill="#7B4A96"/>
  <rect x="60" y="230" width="120" height="6" rx="3" fill="#A870C2" opacity="0.4"/>

  <!-- Left Arm -->
  <rect x="40" y="160" width="18" height="50" rx="9" fill="#4A3A6B"/>
  <rect x="40" y="160" width="18" height="25" rx="9" fill="#5A4A7B" opacity="0.5"/>

  <!-- Left Glove -->
  <circle cx="49" cy="215" r="14" fill="#4A3A6B"/>
  <circle cx="49" cy="215" r="12" fill="#2C1F4A"/>
  <rect x="43" y="205" width="5" height="8" rx="2.5" fill="#000"/>
  <rect x="49" y="202" width="5" height="8" rx="2.5" fill="#000"/>
  <rect x="55" y="205" width="5" height="8" rx="2.5" fill="#000"/>

  <!-- Right Arm (Pointing) -->
  <g id="ali-arm-point" transform-origin="191px 160px">
    <rect x="182" y="160" width="18" height="50" rx="9" fill="#4A3A6B"/>
    <rect x="182" y="160" width="18" height="25" rx="9" fill="#5A4A7B" opacity="0.5"/>

    <!-- Right Glove -->
    <circle cx="191" cy="215" r="14" fill="#FF88C8"/>
    <circle cx="191" cy="215" r="12" fill="#FF66B2"/>
    <rect x="188" y="190" width="6" height="28" rx="3" fill="#FF88C8"/>
    <circle cx="191" cy="188" r="5" fill="#FF66B2"/>
  </g>

  <!-- Legs -->
  <rect x="75" y="245" width="22" height="45" rx="11" fill="#7B4A96"/>
  <rect x="75" y="245" width="22" height="22" rx="11" fill="#A870C2" opacity="0.4"/>

  <ellipse cx="86" cy="295" rx="16" ry="10" fill="#FF88C8"/>
  <ellipse cx="86" cy="293" rx="14" ry="8" fill="#FF66B2"/>
  <rect x="76" y="290" width="20" height="4" rx="2" fill="rgba(0,0,0,0.1)"/>

  <rect x="143" y="245" width="22" height="45" rx="11" fill="#7B4A96"/>
  <rect x="143" y="245" width="22" height="22" rx="11" fill="#A870C2" opacity="0.4"/>

  <ellipse cx="154" cy="295" rx="16" ry="10" fill="#FF88C8"/>
  <ellipse cx="154" cy="293" rx="14" ry="8" fill="#FF66B2"/>
  <rect x="144" y="290" width="20" height="4" rx="2" fill="rgba(0,0,0,0.1)"/>

  <rect x="80" y="300" width="12" height="4" rx="2" fill="#4A3A6B"/>
  <rect x="148" y="300" width="12" height="4" rx="2" fill="#4A3A6B"/>
</svg>
`;
