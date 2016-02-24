class UsersController < ApplicationController

# before_action :authorize, only: [:show]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
    # @user.events.build
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      flash[:success] = "Glad you could join us #{@user.username}!"
      redirect_to users_path
    else
      flash[:failure] = "Oops, something went wrong. Try again."
      redirect_to users_new_path
    end
  end

  def edit
    @user = User.find(params[:id])
    # @user.event.build
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      redirect_to user_path @user
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      redirect_to users_path
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
