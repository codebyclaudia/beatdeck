import type { Position, TimelineHost } from 'beatdeck';

/** Automatic sub-state for the deck. */
export interface Live {
  counted: boolean;
}

export function initialLive(_pos: Position): Live {
  return {
    counted: true,
  };
}

export function timeline(_pos: Position, _host: TimelineHost<Live>) {
  // Add automatic beat timelines here if needed
}
