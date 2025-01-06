import { render, screen } from '@testing-library/react';

import TimesHero from '../times-hero';
import { describe, expect, it } from 'vitest';

describe('TimesHero', () => {
  it('renders the SERVICE TIMES text', () => {
    render(<TimesHero />);
    const serviceTimesText = screen.getByText('SERVICE TIMES');
    expect(serviceTimesText).toBeDefined();
  });

  it('renders the WATCH ONLINE button', () => {
    render(<TimesHero />);
    const watchOnlineButton = screen.getByText('WATCH ONLINE');
    expect(watchOnlineButton).toBeDefined();
  });

  it('renders the OUR SITE text', () => {
    render(<TimesHero />);
    const ourSiteText = screen.getByText('OUR SITE');
    expect(ourSiteText).toBeDefined();
  });

  it('renders the service times', () => {
    render(<TimesHero />);
    const time1 = screen.getByText('10:00 AM');
    const time2 = screen.getByText('11:58 AM');
    expect(time1).toBeDefined();
    expect(time2).toBeDefined();
  });

  it('renders the location address', () => {
    render(<TimesHero />);
    const addressLine1 = screen.getByText('781 WARDEN AVENUE');
    const addressLine2 = screen.getByText('SCARBOROUGH, ON');
    expect(addressLine1).toBeDefined();
    expect(addressLine2).toBeDefined();
  });
});