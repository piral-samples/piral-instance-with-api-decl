import type { ComponentType } from 'react';
import type {} from 'piral-core';

declare module 'piral-core/lib/types/custom' {
  interface PiletCustomApi extends RegisterMenuItemApi { }
}

export interface RegisterMenuItemApi {
  registerMenuItem(route: string, text: string, Icon: ComponentType<SvgIconProps>): void;
}

export interface SvgIconProps {}
