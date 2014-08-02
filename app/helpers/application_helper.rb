module ApplicationHelper

  def header_link_to(text, paths)
    paths = Array(paths)
    if paths.include? request.path
      content_tag(:div, text, :class => "current")
    else
      link_to text, paths.first
    end
  end

  def wedding_day
    Date.new(2014, 10, 4)
  end

end
