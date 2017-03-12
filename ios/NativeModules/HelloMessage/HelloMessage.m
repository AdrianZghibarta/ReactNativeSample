//
//  HelloMessage.m
//  FreshNewsApp
//
//  Created by Adrian Zghibarta on 3/12/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

// - HelloMessage.h file
#import "HelloMessage.h"

@implementation HelloMessage

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getGeneralMessage:(RCTResponseSenderBlock)callback)
{
  callback(@[[NSNull null], @"This is general message from iOS"]);
}

RCT_REMAP_METHOD(getHelloMessage,
                 username:(NSString*)username
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  if (username) {
    resolve([NSString stringWithFormat:@"Hello %@, I am iOS!", username]);
  }
  else {
    reject(@"no_name", @"No name was provided", nil);
  }
}

@end
