import { simpleEmbed } from './embeds/simpleEmbed';
import { successEmbed } from './embeds/successEmbed';
import { errorEmbed } from './embeds/errorEmbed';

export * from './embeds/simpleEmbed';
export * from './embeds/successEmbed';
export * from './embeds/errorEmbed';

const embeds = {
  simpleEmbed,
  successEmbed,
  errorEmbed,
};

export default {
  embeds,
};
