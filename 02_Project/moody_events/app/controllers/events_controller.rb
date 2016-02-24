class EventsController < ApplicationController

  def index
    @events = Event.all

  end

  def show
    @event = Event.find(params[:id])
    # @user = User.find(params[:id])
  end

  def new
    @event = Event.new
  end

  def create
    if @event = current_user.events.new(event_params)
        @event.save
      redirect_to events_path
    else
      redirect_to events_new_path
    end
  end

  def edit
  end

  def update
  end

  def destroy
    @event = Event.find(params[:id])
    if @event.destroy
      redirect_to events_path
    end
  end

private
  def event_params
    params.require(:event).permit(:name, :url)
  end
end
