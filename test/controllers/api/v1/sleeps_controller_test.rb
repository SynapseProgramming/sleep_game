require "test_helper"

class Api::V1::SleepsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_sleeps_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_sleeps_create_url
    assert_response :success
  end

  test "should get find" do
    get api_v1_sleeps_find_url
    assert_response :success
  end

  test "should get delete" do
    get api_v1_sleeps_delete_url
    assert_response :success
  end
end
