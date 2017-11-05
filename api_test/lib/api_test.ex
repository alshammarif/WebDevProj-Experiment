defmodule ApiTest do
  @moduledoc """
  Documentation for ApiTest.
  """

  def api_key, do: "a_secret"

  def base_url, do: "https://maps.googleapis.com/maps/api/"

  @doc """
  Gets the geographic coordinates (longitude and latitude) for
  a given address.
  """
  def get_coordinates(address) do
    lookup_address = convert_address(address)
    resp = HTTPoison.get!(base_url() <> "geocode/json?address="
                          <> lookup_address <> "&key=" <> api_key())
    data = Poison.decode!(resp.body)

    format_coordinates(data)
  end

  @doc """
  Converts a human-readable string address into the format necessary
  for a https Google API request.
  """
  def convert_address(address) do
#    "1600+Amphitheatre+Parkway,+Mountain+View,+CA"
    String.replace(address, " ", "+")
  end

  def format_coordinates(google_data) do
    geo = hd(google_data["results"])["geometry"]

    if geo["bounds"] do
      coordinates = geo["bounds"]["northeast"]

      lat = coordinates["lat"]
      lng = coordinates["lng"]
    else
      coordinates = geo["location"]

      lat = coordinates["lat"]
      lng = coordinates["lng"]
    end

    "Latitude: " <> Float.to_string(lat) <> "   Longitude: " <> Float.to_string(lng)
  end
end
