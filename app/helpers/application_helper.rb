module ApplicationHelper

  def header_link_to(text, path)
    if path == request.path
      content_tag(:div, text, :class => "current")
    else
      link_to text, path
    end
  end

end
