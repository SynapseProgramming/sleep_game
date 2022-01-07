class Api::V1::SleepsController < ApplicationController
  def index
    @all_sleeps= Sleeptime.all
    render json: @all_sleeps
  end

  def create
  end

  def find
  end

  def delete
  end
end
