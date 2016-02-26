class UsersController < ApplicationController

# before_action :authorize

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
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
    # puts "current_user.id: #{current_user.id.class}"
    # puts "params[:id]: #{params[:id].class}"
    if current_user.id.to_s == params[:id]
      @user = User.find(params[:id])
    else
      redirect_to user_path @user
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      redirect_to user_path @user
    end
  end

  def destroy
    if current_user.id.to_s == params[:id]
      @user = User.find(params[:id])
    elsif
      @user.destroy
    else
      redirect_to user_path @user
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
