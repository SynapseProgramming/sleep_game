class Api::V1::SleepsController < ApplicationController

  skip_forgery_protection
  def index
    @all_sleeps= Sleeptime.all
    render json: @all_sleeps
  end

  def create
    @new_sleep=Sleeptime.create!(check_params)
    if @new_sleep
      render json: @new_sleep
    else render json: @new_sleep.errors
    end
  end

  def find
  end

  def delete
    Sleeptime.destroy_all
    render json: {msg:"All deleted!"}
  end
  def check_params
        params.permit(:date, :hours)
      end
end
