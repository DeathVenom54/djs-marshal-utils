import { errorEmbed, simpleEmbed, successEmbed } from './embeds';

export * from './embeds';
export * from './interceptors';

const embeds = {
  simpleEmbed,
  successEmbed,
  errorEmbed,
};

export default {
  embeds,
};
