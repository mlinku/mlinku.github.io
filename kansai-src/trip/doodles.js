/* Hand-drawn line art for the quiet places of the guide — never on rows, sheets or transport notes.
   One-colour strokes in currentColor (so night mode follows), a soft colour wash underneath like a sketchbook
   watercolour, and a second faint pass half a pixel off plus a shared roughen filter for the pen feel. */
const DOODLES={
 plane:{wash:'<ellipse class="wash accent" cx="33" cy="34" rx="22" ry="11"/>',lines:
  '<path d="M10 34C14 31 40 29 52 30C57 30.5 58 33 53 34.5C40 37 18 37.5 10 34Z"/><path d="M30 33 22 46 27 46.5 40 34"/><path d="M32 31 27 23.5 31 23.8 38.5 30.6"/><path d="M14 33 9.5 24 13.5 24.5 20 32"/><path d="M40 32.6h.1M44 32.3h.1M48 32.2h.1"/><path class="dash" d="M3 48C9 45 13 47 19 43"/><path d="M42 51c1-3 5-3 6 0 2-1 4 1 3 3H41c-1-1 0-3 1-3Z"/>'},
 tea:{wash:'<ellipse class="wash moegi" cx="32" cy="38" rx="19" ry="14"/>',lines:
  '<path d="M12 30C16 26.5 48 26.5 52 30C48 33.2 16 33.2 12 30Z"/><path d="M12 30C12.5 44 22 52 32 52S51.5 44 52 30"/><path d="M24 52 25 55H39L40 52"/><path class="soft" d="M17 30.4C22 29 26 31.6 31 30S41 29 47 30.6"/><path d="M26 22C24 18 29 16 27 11M35 23C33 19 38 17 36 12"/><path d="M50 18C55 13.5 60 17.5 58 22 54 24.5 50 22 50 18ZM50.5 18.5 57 21.5"/>'},
 maple:{wash:'<circle class="wash shu" cx="33" cy="31" r="18"/>',lines:
  '<path d="M32 8 35.5 19 46 13 42.5 25 56 27 45 34 49 43 37.5 39 32 47 26.5 39 15 43 19 34 8 27 21.5 25 18 13 28.5 19Z"/><path d="M32 47C32 52 30.5 56 27 59"/><path class="soft" d="M32 45V17M32 36 44 28M32 36 20 28M32 41 40 40M32 41 24 40"/><path d="M52 50 54.5 53 57.5 52 55.5 55 57 58 54 57 52 59.5 51.5 56.5 48.5 55.5 51.5 54.5Z"/>'},
 torii:{wash:'<rect class="wash shu" x="15" y="18" width="38" height="38" rx="6"/>',lines:
  '<path d="M8 16C20 19.5 44 19.5 56 16L55 21.5C44 23.5 20 23.5 9 21.5Z"/><path d="M13 29H51V33H13Z"/><path d="M18 22 16.5 57H22L22.5 22M45.5 22 46 57H51.5L50 22"/><path d="M29.5 23.5H34.5V28.5H29.5Z"/><path d="M6 58C20 57 44 59.5 58 57.5"/><path class="soft" d="M58 40V57M60.5 40V57M56 42H62"/>'},
 globe:{wash:'<circle class="wash accent" cx="34" cy="29" r="17"/>',lines:
  '<circle cx="32" cy="28" r="16"/><path class="soft" d="M32 12C24 18 24 38 32 44 40 38 40 18 32 12ZM17 22C26 25 38 25 47 22M17 34C26 31 38 31 47 34"/><path d="M10.5 33.5C6.5 25.5 50 13.5 55 21 59 28.5 16 41.5 10.5 33.5Z"/><path d="M32 44V50M22 54C26 50.5 38 50.5 42 54Z"/><path d="M13 57C15 54 18 54 20 57M44 57C46 54 49 54 51 57"/>'},
 deer:{wash:'<ellipse class="wash gold" cx="32" cy="36" rx="17" ry="9"/>',lines:
  '<path d="M18 34C18 28 40 27 44 31 46 34 45 38 42 39 34 41 22 41 18 38Z"/><path d="M41 31C43 25 45 20 47 17 49 15 53 15 54 17L56 20C55 21 52 21 50 20 49 23 47 28 45.5 33"/><path d="M48 16 45 12.5 49.5 14"/><path d="M50 15C50 10 47.5 8 46.5 5M49.2 11 52.5 7M51.5 15C53.5 11 56 10 57.5 7"/><path d="M22 40 21 54M26 40.5 27 54M38 40.5 37 54M42 39 44 54"/><path d="M18 34C15 33 15 31 17.5 30"/><path d="M26 33h.1M31 32h.1M36 33h.1"/><path class="soft" d="M12 56C24 55 42 57.5 54 55.5"/>'},
 bridge:{wash:'<path class="wash shu" d="M8 41C19 17 45 17 56 41Z"/>',lines:
  '<path d="M6 40C18 14 46 14 58 40"/><path d="M4 42H60"/><path class="soft" d="M14 29.5V42M22 22V42M32 18.5V42M42 22V42M50 29.5V42"/><path d="M10 42V51M54 42V51"/><path d="M4 55c4-2 6 2 10 0s6 2 10 0 6 2 10 0 6 2 10 0 6 2 10 0"/><path class="soft" d="M12 60c4-2 6 2 10 0s6 2 10 0 6 2 10 0"/><path d="M42 9q3-3 5 0 2-3 5 0"/>'},
 suitcase:{wash:'<rect class="wash plum" x="16" y="25" width="38" height="28" rx="5"/>',lines:
  '<path d="M14 22H50A4 4 0 0 1 54 26V50A4 4 0 0 1 50 54H14A4 4 0 0 1 10 50V26A4 4 0 0 1 14 22Z"/><path d="M26 22V16H38V22"/><path d="M22 22V54M42 22V54"/><circle cx="18" cy="57" r="2"/><circle cx="46" cy="57" r="2"/><path class="soft" d="M29 33 32 30 35 33 32 41Z"/><path class="dash" d="M47 14C52 10 56 11 60 7"/>'}
};
const DAY_DOODLE={'2026-11-30':'plane','2026-12-01':'tea','2026-12-02':'maple','2026-12-03':'torii','2026-12-04':'globe','2026-12-05':'deer','2026-12-06':'bridge','2026-12-07':'suitcase'};
// Two wide scenes: setting off (before the trip) and the way home (after it).
const SCENES={
 depart:{wash:'<circle class="wash gold" cx="191" cy="31" r="15"/><rect class="wash moegi" x="98" y="77" width="100" height="19" rx="4"/><path class="wash moegi" d="M0 88C30 72 60 74 92 81 120 88 150 68 186 72 206 74 224 81 240 79V110H0Z"/>',lines:
  '<circle cx="190" cy="30" r="12"/><path class="soft" d="M190 12V8M208 30H212M203 17 206 14M177 17 174 14"/><path d="M0 86C30 70 60 72 92 80 120 87 150 66 186 70 206 72 224 80 240 78"/>'
  +'<path d="M46 60C52 57 64 57 70 60M48 50C53 47 63 47 68 50M50 40C54 38 62 38 66 40M52 60V67H64V60M53 50V57M63 50V57M54 40V47M62 40V47M58 38V29M56.5 32H59.5"/>'
  +'<path d="M0 98H240"/><path class="dash" d="M0 101.5H240"/>'
  +'<path d="M96 96V82C96 78 99 76 103 76H150V96ZM154 96V76H196V96Z"/><path class="soft" d="M104 80h10v6h-10zM120 80h10v6h-10zM136 80h10v6h-10zM160 80h10v6h-10zM176 80h10v6h-10zM96 90H196"/><circle cx="108" cy="97" r="3"/><circle cx="140" cy="97" r="3"/><circle cx="164" cy="97" r="3"/><circle cx="188" cy="97" r="3"/>'
  +'<path d="M110 30q4-4 7 0 3-4 7 0M128 22q3-3 5 0 2-3 5 0"/><path class="soft" d="M28 26 30 30 34 29.5 31.5 32 33 36 29.5 34.5 26.5 37 27 33 23.5 31.5 27.5 30.5Z"/>'},
 home:{wash:'<path class="wash shu" d="M150 74A22 22 0 0 1 194 74Z"/><path class="wash accent" d="M0 74H240V110H0Z"/>',lines:
  '<path d="M0 74H240"/><path d="M150 74A22 22 0 0 1 194 74"/><path class="soft" d="M172 46V41M150 54 147 51M194 54 197 51"/>'
  +'<path d="M8 84c6-3 10 3 16 0s10 3 16 0M118 92c6-3 10 3 16 0s10 3 16 0 10 3 16 0M58 101c6-3 10 3 16 0s10 3 16 0M196 86c6-3 10 3 16 0s10 3 16 0"/>'
  +'<path d="M0 70C20 66 40 67 56 74"/><path d="M26 67 27 44H29L30 67M23.5 44H32.5V40H23.5ZM28 40V30"/>'
  +'<g transform="translate(64 6) scale(.62)"><path d="M10 34C14 31 40 29 52 30C57 30.5 58 33 53 34.5C40 37 18 37.5 10 34Z"/><path d="M30 33 22 46 27 46.5 40 34"/><path d="M14 33 9.5 24 13.5 24.5 20 32"/></g>'
  +'<path class="dash" d="M104 26C130 30 150 40 168 58"/><path class="soft" d="M210 96 212 99 215 98.5 213 101 214 104 211 103 209 105 208.5 102 206 101 208.5 100Z"/>'}
};
const roughen=(body,vb)=>`<svg class="doodle" viewBox="${vb}" aria-hidden="true">${body.wash}<g class="pass2">${body.lines}</g><g filter="url(#doodle-rough)">${body.lines}</g></svg>`;
const doodle=name=>DOODLES[name]?roughen(DOODLES[name],'0 0 64 64'):'';
const dayDoodle=date=>doodle(DAY_DOODLE[date]);
const scene=name=>SCENES[name]?roughen(SCENES[name],'0 0 240 110').replace('class="doodle"','class="doodle scene"'):'';
// The pen wobble: a gentle displacement shared by every drawing on the page.
const DOODLE_DEFS='<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><filter id="doodle-rough" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="7"/><feDisplacementMap in="SourceGraphic" scale="1.4"/></filter></svg>';
