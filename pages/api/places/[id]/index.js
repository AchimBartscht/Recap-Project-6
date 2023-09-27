import dbConnect from "@/db/dbConnect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(place);
  }
  if (request.method === "PUT") {
    await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ status: `Place ${id} updated!` });
  }
}
