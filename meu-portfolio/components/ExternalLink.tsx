
import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import type { ComponentProps } from 'react';
import { Platform } from 'react-native';

type ExternalLinkProps = Omit<
  ComponentProps<typeof Link>,
  'href'
> & {
  href: `https://${string}` | `http://${string}`;
};

export function ExternalLink(props: ExternalLinkProps) {
  return (
    <Link
      {...props}
      href={props.href}
      target="_blank"
      onPress={(e) => {
        if (Platform.OS !== 'web') {
          e.preventDefault();
          void WebBrowser.openBrowserAsync(props.href);
        }

        props.onPress?.(e);
      }}
    />
  );
}
