# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class SleepsControllerTest < ActionDispatch::IntegrationTest
      test 'should get index' do
        get api_v1_sleeps_index_url
        assert_response :success
      end

      test 'should get create' do
        get api_v1_sleeps_create_url
        assert_response :success
      end

      test 'should get find' do
        get api_v1_sleeps_find_url
        assert_response :success
      end

      test 'should get delete' do
        get api_v1_sleeps_delete_url
        assert_response :success
      end
    end
  end
end
