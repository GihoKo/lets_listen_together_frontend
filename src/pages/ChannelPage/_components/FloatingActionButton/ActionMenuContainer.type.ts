import { Layer } from '../../ChannelPage.hook';

export interface ActionMenuContainerProps {
  handleDimmedClick: () => void;
  handleUpdateLayer: ({ layer }: { layer: Layer }) => void;
}

export interface useActionMenuContainerProps {
  handleUpdateLayer: ({ layer }: { layer: Layer }) => void;
}
