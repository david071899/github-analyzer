require "httparty"
require "parallel"
count = 0
Parallel.map(1..15000, in_threads: 500) do |project_id|
  response = HTTParty.get("https://www.flyingv.cc/projects/#{project_id}")
  puts response.include?('權限不足')
  count += 1 if !response.include?('權限不足') && ( response.code == 200 )
end
puts count

# 總專案數量（含沒有被提出）7653
# 總專案數量 1679