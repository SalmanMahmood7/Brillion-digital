"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import LoginModal from "@/components/auth/LoginModal";
import { reviewsService, Review } from "@/lib/firebase-services";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Star, MessageSquarePlus, X } from "lucide-react";
import BrillionLoader from "@/components/ui/BrillionLoader";

const StarRating = ({
  value,
  onChange,
}: {
  value: number;
  onChange?: (rating: number) => void;
}) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!onChange}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => onChange && setHovered(star)}
          onMouseLeave={() => onChange && setHovered(0)}
          className={onChange ? "cursor-pointer" : "cursor-default"}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
        >
          <Star
            className={`w-5 h-5 transition-colors duration-150 ${
              star <= (hovered || value)
                ? "text-orange-500 fill-orange-500"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

const ReviewsSection = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  // Auto-advance the slideshow every 5 seconds; pauses while the user
  // interacts (embla resets on pointer drag automatically via re-init)
  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselApi]);

  useEffect(() => {
    reviewsService.getAll().then((data) => {
      setReviews(data);
      setLoading(false);
    });
  }, []);

  const handleWriteReview = () => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !text.trim()) return;

    setSubmitting(true);
    try {
      const review = {
        userId: user.uid,
        userName: user.displayName || user.email?.split("@")[0] || "Anonymous",
        userEmail: user.email || "",
        rating,
        text: text.trim(),
      };
      const id = await reviewsService.create(review);
      setReviews((prev) => [{ ...review, id } as Review, ...prev]);
      setText("");
      setRating(5);
      setShowForm(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#1e3a8a]">Client </span>
            <span className="text-orange-500">Testimonials</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about working with us.
          </p>
          <button
            onClick={handleWriteReview}
            className="mt-4 inline-flex items-center text-xs text-gray-400 hover:text-orange-500 transition-colors duration-200"
          >
            <MessageSquarePlus className="w-3.5 h-3.5 mr-1" />
            Share your experience
          </button>
          {submitted && (
            <div className="mt-4 inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
              Thank you! Your review has been published.
            </div>
          )}
        </div>

        {/* Review Form */}
        {showForm && user && (
          <div className="max-w-xl mx-auto mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close review form"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-[#1e3a8a] mb-1">
              Share your experience
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Posting as{" "}
              <span className="font-medium text-[#1e3a8a]">
                {user.displayName || user.email?.split("@")[0]}
              </span>
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your rating
                </label>
                <StarRating value={rating} onChange={setRating} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your review
                </label>
                <textarea
                  rows={4}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Tell us about your experience working with Brillion Digital..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                  required
                  maxLength={1000}
                />
              </div>
              <Button
                type="submit"
                disabled={submitting || !text.trim()}
                className="w-full bg-[#f97316] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <BrillionLoader size="sm" theme="minimal" className="mr-2" />
                    Publishing...
                  </>
                ) : (
                  "Publish Review"
                )}
              </Button>
            </form>
          </div>
        )}

        {/* Reviews Grid */}
        {loading ? (
          <div className="flex justify-center py-12">
            <BrillionLoader size="lg" theme="minimal" />
          </div>
        ) : reviews.length === 0 ? (
          <p className="text-center text-gray-400 py-8">
            No reviews yet — be the first to share your experience.
          </p>
        ) : (
          <Carousel
            setApi={setCarouselApi}
            opts={{ loop: true, align: "start" }}
            className="px-2 sm:px-12"
          >
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <StarRating value={review.rating} />
                      {review.createdAt?.toDate && (
                        <span className="text-xs text-gray-400">
                          {review.createdAt.toDate().toLocaleDateString("en-CA", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
                      {review.text}
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center text-white text-sm font-bold uppercase">
                        {review.userName.charAt(0)}
                      </div>
                      <div>
                        <span className="block text-sm font-semibold text-[#1e3a8a]">
                          {review.userName}
                        </span>
                        {review.userTitle && (
                          <span className="block text-xs text-gray-500">
                            {review.userTitle}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        )}
      </div>

      {/* Login required before reviewing */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={() => {
          setShowLoginModal(false);
          setShowForm(true);
        }}
      />
    </section>
  );
};

export default ReviewsSection;
