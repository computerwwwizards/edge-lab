import { component$, type PropsOf } from '@builder.io/qwik';

interface ResponsiveImageProps extends PropsOf<'img'> {
  sources: PropsOf<'source'>[];
  pictureProps?: PropsOf<'picture'>;
}

export const ResponsiveImage = component$<ResponsiveImageProps>(
  ({ sources, pictureProps, ...imgProps }) => {
    return (
      <picture {...pictureProps}>
        {sources.map((source, index) => (
          <source key={index} {...source} />
        ))}
        <img {...imgProps} />
      </picture>
    );
  }
);
