import React from 'react';

import { A, C, G, T } from '../glyphs';
import Logo from './logo';

export const DNAGlyphmap = [
    { component: A, regex: "A", color: "red" },
    { component: C, regex: "C", color: "blue" },
    { component: G, regex: "G", color: "orange" },
    { component: T, regex: "T", color: "green" }
];

const DNALogo = ({ pwm, scale, startpos, mode }) => (
    <Logo pwm={pwm} glyphmap={DNAGlyphmap} scale={scale}
      startpos={startpos} mode={mode} />
);
export default DNALogo;
