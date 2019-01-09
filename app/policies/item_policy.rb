class ItemPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def create?
    return true
  end

  def show?
    return true
  end

  def index?
    return true
  end

  def destroy?
    return true
  end

  def update?
    return true
  end

  def set_item?
    return true
  end
end
