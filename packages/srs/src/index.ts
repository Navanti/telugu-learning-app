export type ReviewRating = 'again' | 'hard' | 'good' | 'easy';

const ratingToMultiplier: Record<ReviewRating, number> = {
  again: 0,
  hard: 1.2,
  good: 2,
  easy: 3
};

export function scheduleNextReview(intervalDays: number, rating: ReviewRating): number {
  if (rating === 'again') {
    return 1;
  }

  return Math.max(1, Math.round(intervalDays * ratingToMultiplier[rating]));
}
