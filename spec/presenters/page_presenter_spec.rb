# frozen_string_literal: true
require "rails_helper"

describe PagePresenter do
  describe "#optional_fields_state" do
    it "returns 'hidden' if no errors are present" do
      page_presenter = PagePresenter.new(build(:page))

      expect(page_presenter.optional_fields_state).to eq("hidden")
    end

    it "returns '' when optional fields have errors" do
      create(:page, url_key: "taken")

      page = build(:page, url_key: "taken")
      expect(page).not_to be_valid

      page_presenter = PagePresenter.new(page)

      expect(page_presenter.optional_fields_state).to eq("")
    end
  end

  describe "#sendable_message" do
    it 'says' do

    end
  end
end
