import { ArticleDetailsCommentsSchema } from './articleDetailPageComments';
import { ArticleDetailsRecommendationSchema } from './articleDetailPageRecommendation';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendation: ArticleDetailsRecommendationSchema;
}
