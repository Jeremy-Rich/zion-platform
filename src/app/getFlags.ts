import { decrypt } from '@vercel/flags';
import { type NextRequest } from 'next/server';

interface FlagOverridesType {
  newFeature?: boolean;
}

export async function getFlags(request: NextRequest) {
  const overrideCookie = request.cookies.get('vercel-flag-overrides');
  const overrides = overrideCookie ? await decrypt<FlagOverridesType>(overrideCookie.value) : null;

  const flags = {
    newFeature: overrides?.newFeature ?? false,
  };

  return flags;
}