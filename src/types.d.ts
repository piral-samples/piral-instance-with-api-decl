import * as React from 'react';
import 'piral-core';

declare module 'piral-core/lib/types/custom' {
  interface PiletCustomApi extends RegisterMenuItemApi { }
}

export interface RegisterMenuItemApi {
  registerMenuItem(route: string, text: string, Icon: React.ComponentType<SvgIconProps>): void;
}

export interface SvgIconProps {}