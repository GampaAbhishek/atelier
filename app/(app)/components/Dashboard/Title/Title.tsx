'use client';

import { memo } from 'react';
import TitleBackground from './TitleBackground';
import TitleRobot from './TitleRobot';
import TitleText from './TitleText';
import { DEFAULT_TITLE_CONTENT, LAYOUT_POSITIONS } from './titleConstants';

/**
 * Title Component
 * Single Responsibility: Orchestrate title section sub-components
 *
 * ✅ SOLID Principles Applied:
 * - Single Responsibility: Composes and coordinates sub-components only
 * - Open/Closed: Extensible via titleConstants without modification
 * - Interface Segregation: Props are minimal and focused
 * - Dependency Inversion: Depends on constants abstractions
 * - Liskov Substitution: All sub-components follow expected interfaces
 *
 * 📱 Responsive Design:
 * - Mobile: Compact layout with smaller text and spacing
 * - Tablet: Medium layout with adjusted positioning
 * - Desktop: Full layout with original styling
 *
 * ⚡ Performance:
 * - React.memo for preventing unnecessary re-renders
 * - Image optimization with Next.js Image component
 * - Priority loading for banner images
 */
const Title = memo(() => (
  <div className={LAYOUT_POSITIONS.padding}>
    <TitleBackground>
      <TitleRobot />
      <TitleText content={DEFAULT_TITLE_CONTENT} />
    </TitleBackground>
  </div>
));

Title.displayName = 'Title';

export default Title;
