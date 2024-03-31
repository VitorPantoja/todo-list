import React from 'react';

import { defaultTheme } from '../../styles/theme/default';

type Props = {
  count?: number;
  tittle: string;
  color?: keyof typeof defaultTheme;
};
export const TaskProgress: React.FC<Props> = ({ tittle, count = 0, color = 'primary' }) => {
  return (
    <>
      <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <span style={{ color: defaultTheme[color], border: defaultTheme['gray-100'], fontSize: '16px' }}>
          <strong>{tittle}</strong>
        </span>
        <div style={{ background: defaultTheme['gray-500'], border: defaultTheme['gray-100'], borderRadius: '8px', paddingInline: '8px' }}>
          <span style={{ color: defaultTheme['gray-100'], fontSize: '16px' }}>{count ?? 0}</span>
        </div>
      </div>
    </>
  );
};
