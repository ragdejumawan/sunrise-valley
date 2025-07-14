import { NextResponse } from "next/server";

const reviews = {
  1: { averageRating: 4.8, reviewCount: 124 },
  2: { averageRating: 4.6, reviewCount: 98 },
  3: { averageRating: 4.9, reviewCount: 210 },
};

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> } // 👈 notice `Promise`
) {
  const { id } = await context.params; // ✅ must await `params`

  const review = reviews[parseInt(id)];
  if (!review) {
    return NextResponse.json({ error: "Review not found" }, { status: 404 });
  }

  return NextResponse.json(review);
}
